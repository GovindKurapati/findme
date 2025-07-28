
"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, XAxis, YAxis, BarChart, Bar, Cell } from 'recharts';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MetricCard from "@/components/MetricCard";
import PerformanceCard from "@/components/PerformanceCard";
import PieChart from "@/components/Charts/PieChart";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserStats } from '@/store/userStatsSlice';
import { fetchAppPerformance } from '@/store/appPerformanceSlice';
import { fetchSystemHealth } from '@/store/systemHealthSlice';
import { fetchServerUsage } from '@/store/serverUsageSlice';
import { systemUsageColors, memoryUsageColors, countryColors, stateColors } from '@/utils/chartColors';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { data: userStats, status, error } = useSelector((state) => state.userStats);
  const { data: appPerformance, status: appStatus, error: appError } = useSelector((state) => state.appPerformance);
  const { data: systemHealth, status: systemStatus, error: systemError } = useSelector((state) => state.systemHealth);
  const { data: serverUsage, status: serverStatus, error: serverError } = useSelector((state) => state.serverUsage);

  useEffect(() => {
    dispatch(fetchUserStats());
    dispatch(fetchAppPerformance());
    dispatch(fetchSystemHealth());
    dispatch(fetchServerUsage());
  }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);

  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = isMobile ? 10 : 19;
  const totalPages = Math.ceil(serverUsage?.byState?.length / itemsPerPage);

  // Get current page data
  const getCurrentPageData = () => {
    if (!serverUsage?.byState) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return serverUsage.byState.slice(startIndex, endIndex);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  // Check if screen is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);


  // Transform system health data for charts
  const systemUsageData = systemHealth?.systemUsage ?? [];

  const memoryUsageData = systemHealth?.memoryUsage ?? [];

  // Transform server usage data for charts
  const countryData = serverUsage?.byCountry ?? [];

  // Calculate total memory usage for center display
  const totalMemoryUsage = systemHealth?.memoryUsage?.reduce((sum, item) => {
    if (item.unit !== 'Free Memory') {
      return sum + item.value;
    }
    return sum;
  }, 0) || 0;

  return (
    <main className="font-sans bg-[#F0F9FF] min-h-screen">
      {/* Header */}
      <div className="flex flex-row-reverse bg-[#C4E6FF82] p-4 mb-6 pr-8">
        <div className="flex items-center space-x-2">
          <Image
            src="/user.jpg"
            alt="Devanshi Chitalia"
            width={40}
            height={40}
            className="rounded-xl p-1 w-12 h-12 object-cover"
          />
          <div>
            <p className="text-xl font-semibold">Devanshi Chitalia</p>
            <p className="text-md font-extralight">Owner</p>
          </div>
        </div>
      </div>

      <section className="p-10">
        <h1 className="text-3xl font-semibold text-[#2E2A2A] mb-16">Overview</h1>


        {/* Users Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 xl:gap-20 mb-6">
            <MetricCard
              title="New Sign-Ups"
              value={userStats?.newSignUps}
              change={userStats?.newSignUpsChange}
              subtitle="last 24 hours"
              peakActivityUsers={userStats?.peakActivity?.users}
              peakActivityTime={userStats?.peakActivity?.time}
              lowestActivityUsers={userStats?.lowestActivity?.users}
              lowestActivityTime={userStats?.lowestActivity?.time}
              chartData={userStats?.newSignUpsHourlyData}
            />
            <MetricCard
              title="Active Users"
              value={userStats?.activeUsers}
              change={userStats?.activeUsersChange}
              peakActivityUsers={userStats?.peakActivity?.users}
              peakActivityTime={userStats?.peakActivity?.time}
              lowestActivityUsers={userStats?.lowestActivity?.users}
              lowestActivityTime={userStats?.lowestActivity?.time}
              chartData={userStats?.activeUsersHourlyData}
            />
            <MetricCard
              title="Inactive Users"
              value={userStats?.inactiveUsers}
              change={userStats?.inactiveUsersChange}
              lowestActivityUsers={userStats?.lowestActivity?.users}
              lowestActivityTime={userStats?.lowestActivity?.time}
              peakActivityUsers={userStats?.peakActivity?.users}
              peakActivityTime={userStats?.peakActivity?.time}
              chartData={userStats?.inactiveUsersHourlyData}
            />
          </div>
        </section>

        {/* App Performance Section */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-8">App Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 xl:gap-20 mb-6">
            <PerformanceCard
              title="Average Response Time"
              value={appPerformance?.averageResponseTime + " ms" || 0}
              change={appPerformance?.responseTimeChange || 0}
            />
            <PerformanceCard
              title="Error Rate"
              value={appPerformance?.errorRate || 0}
              change={appPerformance?.errorRateChange || 0}
            />
            <PerformanceCard
              title="Uptime"
              value={appPerformance?.uptime + "%" || 0}
              change={appPerformance?.uptimeChange || 0}
              subtitle={appPerformance?.uptimePeriod || "past 30 days"}
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-8">System Health</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 xl:gap-20 mb-14">
            {/* System Usage Chart */}
            <PieChart
              data={systemUsageData}
              colorMap={systemUsageColors}
              title="System Usage"
            />

            {/* Memory Usage Chart */}
            <PieChart
              data={memoryUsageData}
              colorMap={memoryUsageColors}
              title="Memory Usage"
              centerText={`${totalMemoryUsage}%`}
              centerSubText={`${totalMemoryUsage}GB out of 100GB`}
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 mb-14">
            <h2 className="text-lg font-normal text-gray-900">Server Usage</h2>
            <p className="text-sm font-normal text-gray-900 mb-6">By Country</p>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={countryData} margin={{ top: 20, right: 30, left: 20, bottom: isMobile ? 60 : 5 }} barCategoryGap={isMobile ? "15%" : "30%"}>
                  <XAxis
                    dataKey="country"
                    axisLine={false}
                    tickLine={false}
                    tick={{ 
                      fontSize: isMobile ? 10 : 14, 
                      fill: '#374151', 
                      fontWeight: '400',
                    }}
                    angle={isMobile ? -45 : 0}
                    textAnchor={isMobile ? "end" : "middle"}
                    height={isMobile ? 60 : undefined}
                    interval={0}
                    dy={ isMobile ? 0 : 10}
                  />
                  <YAxis hide />
                  <Bar dataKey="usage" radius={[8, 8, 8, 8]}>
                    {countryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={countryColors[entry.country]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* State Chart */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-normal text-gray-900">Server Usage</h2>
            <p className="text-sm font-normal text-gray-900 mb-6">By State</p>

            {serverStatus === 'loading' ? (
              <div className="h-80 flex items-center justify-center">
                <p className="text-gray-500">Loading state data...</p>
              </div>
            ) : serverUsage?.byState ? (
              <>
                <div className="h-80 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={getCurrentPageData()} margin={{ top: 20, right: 30, left: 20, bottom: isMobile ? 60 : 5 }} barCategoryGap={isMobile ? "10%" : "20%"}>
                      <XAxis
                        dataKey="stateCode"
                        axisLine={false}
                        tickLine={false}
                        tick={{ 
                          fontSize: isMobile ? 10 : 14, 
                          fill: '#374151', 
                          fontWeight: '400',
                        }}
                        angle={isMobile ? -45 : 0}
                        textAnchor={isMobile ? "end" : "middle"}
                        height={isMobile ? 60 : undefined}
                        interval={0}
                        dy={ isMobile ? 0 : 10}
                      />
                      <YAxis hide />
                      <Bar dataKey="usage" radius={[8, 8, 8, 8]}>
                        {getCurrentPageData().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={stateColors[entry.stateCode]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-md text-[#1814F3] ${currentPage === 1
                      ? 'cursor-not-allowed text-gray-300'
                      : 'hover:bg-gray-100 cursor-pointer'
                      }`}
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex space-x-2">
                    {[...Array(totalPages)].map((_, index) => {
                      const page = index + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-8 h-8 rounded-md text-sm text-[#1814F3] cursor-pointer ${currentPage === page
                            ? 'font-bold text-blue'
                            : 'hover:bg-gray-100 font-light'
                            }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-md text-[#1814F3] ${currentPage === totalPages
                      ? 'cursor-not-allowed text-gray-300'
                      : 'hover:bg-gray-100 cursor-pointer'
                      }`}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </>
            ) : (
              <div className="h-80 flex items-center justify-center">
                <p className="text-gray-500">No state data available</p>
              </div>
            )}
          </div>
        </section>
      </section>


    </main>
  );
}





