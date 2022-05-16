import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { ChartData } from '../../types';
import styles from './index.module.css'

type Props = {
    chartData: ChartData[]
}

export const FeatureAnalysis = ({ chartData }: Props) => {
    return <ResponsiveContainer width={400} height={320} className={styles.chart}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="label" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
    </ResponsiveContainer>
}