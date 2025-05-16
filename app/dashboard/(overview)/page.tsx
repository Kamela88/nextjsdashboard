// import { Card } from "../../ui/dashboard/cards";
import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { lusitana } from "../../ui/fonts";
// import { fetchRevenue, fetchLatestInvoices, fetchCardData } from "../../lib/data";
// import { fetchCardData } from "../../lib/data";
import { CardSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { RevenueChartSkeleton } from "@/app/ui/skeletons";
import { LatestInvoicesSkeleton } from "@/app/ui/skeletons";



export default async function Page(){
    // const revenue = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices()
    // const totalPaidInvoices = (await fetchCardData()).totalPaidInvoices
    // const totalPendingInvoices = (await fetchCardData()).totalPendingInvoices
    // const numberOfInvoices = (await fetchCardData()).numberOfInvoices
    // const numberOfCustomers = (await fetchCardData()).numberOfCustomers
    return (
        <main>
            <h1 className="{'${lusitana.classname} mb-4 text-xl md:text-2xl">
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
                <Card title="Pending" value={totalPendingInvoices} type="pending" />
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                <Card
                title="Total Customers"
                value={numberOfCustomers}
                type="customers"
                /> */}
                <Suspense fallback = {<CardSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/* <RevenueChart revenue={revenue}  /> */}
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                
                {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>

    );
}