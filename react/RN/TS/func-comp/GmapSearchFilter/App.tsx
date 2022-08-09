import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView, StyleSheet,
  Text
} from 'react-native';


export type PredictionType = {
  description: string
  place_id: string
  terms: Object[]
}

const App = () => {
  const [searchRes, setSearchRes] = useState([])
  const [predict, setPredict] = useState<PredictionType[]>([])

  const search = 'tugu pah'
  const GOOGLE_PACES_API_BASE_URL = 'https://maps.googleapis.com/maps/api/place'
  const GOOGLE_API_KEY = 'AIzaSyDSKsr1WK1DcCmD49tsJ1nZMgKT8RJC9EE'
  const apiUrl = `${GOOGLE_PACES_API_BASE_URL}/autocomplete/json?key=${GOOGLE_API_KEY}&input=${search}`

  const fetchSearch = async () => {
    try {
      const result = await axios.request({
        method: 'post',
        url: apiUrl
      })
      if (result) {
        // const { data: { predictions } } = result
        console.log('ok', result)
        setSearchRes(result.data.predictions)
        // setPredictions(predictions)
        // setShowPredictions(true)
      }
    } catch (e) {
      console.log('fail', e)
    }
  }

  useEffect(() => {
    fetchSearch()
  }, [])

  return (
    <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <Text>
          {JSON.stringify(searchRes, '\t', 2)}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
