import { FunctionComponent } from 'react'
import { StyleSheet } from 'react-native'
import { PredictionType } from '../../App'

type ResultListProps = {
    onChangeText: (text: string) => void
    predictions: PredictionType[]
}

const ResultList: FunctionComponent<ResultListProps> = (props) => {
    return (
        <>

        </>
    )
}

export default ResultList

const styles = StyleSheet.create({})