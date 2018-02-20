import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';

const Images = [
  { uri: 'http://www.onthisveryspot.com/pics/spot_84_347.jpg' },
  { uri: 'https://www.omicsonline.org/reporting-system/universities/university-of-memphis-2768.jpg' },
  { uri: 'http://www.photoshelter.com/img-get/I0000Qw.Zy2q6hJU/s/800/533/Clayborn-Temple-Memphis-TN-05.jpg'},
  { uri: 'https://c1.staticflickr.com/3/2750/4490848151_b28b62db42_z.jpg'},
  { uri: 'http://wp.production.patheos.com/blogs/rhetoricraceandreligion/files/2017/05/ell-persons-marker.jpg'},
  { uri: 'http://historic-memphis.com/biographies/peoples-grocery/peoples-grocery.jpg'},
  { uri: 'http://www.sitemason.com/files/hrpB5K/loc_photo.png/main.png'},
  { uri: 'http://memphis.citysaver.com/wp-content/uploads/sites/15/2013/03/sites/15/SlaveHavenMuseum-1024x768.jpg'},
];

const { width, height } = Dimensions.get('window');

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class screens extends Component {
  constructor(props) {
    super(props);
  this.state = {
    pageVisible: false,
    markers: [
      {
        coordinate: {
          latitude: 35.1345,
          longitude: -90.0574,
        },
        title: 'Lorraine Motel',
        description: 'Site of Dr. Martin Luther King\'s assasination',
        image: Images[0],
        info: 'Test',
      },
      {
        coordinate: {
          latitude: 35.1186,
          longitude: -89.9372,
        },
        title: 'University of Memphis',
        description: 'Home to the Memphis State 8',
        image: Images[1],
        info: 'Test test',
      },
      {
        coordinate: {
          latitude: 35.1365,
          longitude: -90.0510,
        },
        title: 'Clayborn Temple',
        description: 'Hub for activism',
        image: Images[2],
        info: 'Test test test',
      },
      {
        coordinate: {
          latitude: 35.1215,
          longitude: -90.0491,
        },
        title: 'Mason Temple',
        description: 'Dr. martin Luther King\'s I\'ve been to the mountaintop speech',
        image: Images[3],
        info: 'Test test test test',
      },
      {
        coordinate: {
          latitude: 35.158659,
          longitude: -89.882587,
        },
        title: 'Lynching site of Ell Persons',
        description: 'Site of the 1917 lynching of Ell Persons',
        image: Images[4],
        info: 'Test test test test test',
      },
      {
        coordinate: {
          latitude: 35.119405,
          longitude: -90.038575,
        },
        title: 'People\'s Grocery Historical Marker',
        description: 'Black owned store whose owners were lynched',
        image: Images[5],
        info: 'Test test test test test test',
      },
      {
        coordinate: {
          latitude: 35.118018,
          longitude: -90.034486,
        },
        title: 'Lemoyne-Owen College',
        description: 'Historically Black College established in 1968',
        image: Images[6],
        info: 'Test test test test test test test',
      },
      {
        coordinate: {
          latitude: 35.164615,
          longitude: -90.043194,
        },
        title: 'Slave Haven Museum',
        description: 'Underground railroad museum on the Burke Estate',
        image: Images[7],
        info: 'Test test test test test test test test',
      }
    ],
    region: {
      latitude: 35.1582,
      longitude: -90.0034,
      latitudeDelta: 0.0922 * 2,
      longitudeDelta: 0.0421 * 2,
    },
  };
}

  componentWillMount() {
    this.index = 0;
    this.index2 = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    //detect when scrolling has stopped then animate
    //debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }
  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: 'clamp',
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: 'clamp',
      });
      return { scale, opacity };
    });

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 25,
  },
  scrollView: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: 'white',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
    borderRadius: 10,
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 2,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(191,13,13, 0.9)',
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(191,13,13, 0.3)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(191,13,13, 0.5)',
  },
});
