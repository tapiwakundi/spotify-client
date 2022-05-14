import { findAverage } from "../utils/averages"
import { ChartData } from '../types'
export const processChartData = (data: any) => {
    const averageDancability = findAverage(data, 'danceability')
    const averageAcousticness = findAverage(data, 'acousticness')
    const averageEnergy = findAverage(data, 'energy')
    const averageSpeechiness = findAverage(data, 'speechiness')
    const averagePositivity = findAverage(data, 'valence')

    const chartData: ChartData[] = []
    chartData.push({
        label: 'Danceability',
        A: averageDancability,
        fullMark: 1
    })
    chartData.push({
        label: 'Acousticness',
        A: averageAcousticness,
        fullMark: 1
    })
    chartData.push({
        label: 'Energy',
        A: averageEnergy,
        fullMark: 1
    })
    chartData.push({
        label: 'Speechiness',
        A: averageSpeechiness,
        fullMark: 1
    })
    chartData.push({
        label: 'Positivity',
        A: averagePositivity,
        fullMark: 1
    })
    return chartData;
}