import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const weatherAPI =
  'http://api.weatherstack.com/current?access_key=ccd369ce3b2619e80ef3d922c8846229&query=Viet%20Nam';
const Weather = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(weatherAPI)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  if (!data) 
  return <View></View>
  return (
    <View style={{backgroundColor: 'rgb(0, 51, 102)'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 30,
        }}>
        <Text style={{color: 'white'}}>{data.location?.name}, </Text>
        <Text style={{color: 'white'}}>{data.location?.country}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Image
            source={{uri: data.current?.weather_icons[0]}}
            style={{width: 100, height: 100}}
          />
          <Text style={{color: 'white',fontWeight:'bold'}}>
            {data.current?.weather_descriptions}
          </Text>
        </View>
        <Text style={{color: 'white'}}>
          {data.current?.temperature} &#176; C
        </Text>
        <View>
          <Text style={{color: 'white'}}>
            Wind: {data.current?.wind_speed} kmph
          </Text>
          <Text style={{color: 'white'}}>
            Precip: {data.current?.precip} mm
          </Text>
          <Text style={{color: 'white'}}>
            Pressure: {data.current?.pressure} mb
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{color: 'white'}}>TUE</Text>

          <Image
            source={{uri: data.current?.weather_icons[0]}}
            style={{width: 50, height: 50}}
          />
          <Text style={{color: 'white'}}>
            {data.current?.temperature} &#176; C
          </Text>
        </View>
        <View>
          <Text style={{color: 'white'}}>WED</Text>

          <Image
            source={{uri: data.current?.weather_icons[0]}}
            style={{width: 50, height: 50}}
          />
          <Text style={{color: 'white'}}>
            {data.current?.temperature} &#176; C
          </Text>
        </View>
        <View>
          <Text style={{color: 'white'}}>THU</Text>

          <Image
            source={{uri: data.current?.weather_icons[0]}}
            style={{width: 50, height: 50}}
          />
          <Text style={{color: 'white'}}>
            {data.current?.temperature} &#176; C
          </Text>
        </View>
        <View>
          <Text style={{color: 'white'}}>FRI</Text>

          <Image
            source={{uri: data.current?.weather_icons[0]}}
            style={{width: 50, height: 50}}
          />
          <Text style={{color: 'white'}}>
            {data.current?.temperature} &#176; C
          </Text>
        </View>
        <View>
          <Text style={{color: 'white'}}>SAT</Text>
          <Image
            source={{uri: data.current?.weather_icons[0]}}
            style={{width: 50, height: 50}}
          />
          <Text style={{color: 'white'}}>
            {data.current?.temperature} &#176; C
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Weather;
