const axios = require('axios')
import { gql, GraphQLClient } from 'graphql-request'

const query = gql`
{
  offchain {
    covid {
      facts(date: {since: $from, till: $till}, country: {is: US}) {
        confirmed
        recovered
        deaths
        country {
          name
        }
      }
    }
  }
}
`

const variables = {
  "limit": 10,
  "offset": 0,
  "from": "2021-12-22",
  "till": "2022-01-20"
}

const client = new GraphQLClient('https://covid-19-graphql-analytics.p.rapidapi.com/', { 
  headers: {
    'x-rapidapi-host': 'covid-19-graphql-analytics.p.rapidapi.com',
    'x-rapidapi-key': 'faf47f6d8fmshe77b1eccab3733ep13688ajsn3b0b88d3ab71'
  }
})


export async function getCountryCOVIDStats() {

  client.request(query, variables).then((data) => console.log(data))
      
      // axios.request(options).then(function (response) {
      //     console.log(response.data);
      // }).catch(function (error) {
      //     console.error(error);
      // });
}