import React from 'react'
import styles from './AnalyticsPage.module.css'

import Navbar from '../../components/Navbar/Navbar'
import Analytics from '../../components/Analytics/Analytics'

function AnalyticsPage() {
    return (
        <div className={styles.container}>
            <Navbar page="analytics" />
            <div className={styles.analyticsContainer}>
                <Analytics />
            </div>
        </div>
    )
}

export default AnalyticsPage