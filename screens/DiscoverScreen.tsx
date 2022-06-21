/* eslint-disable */

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
import {
  Badge,
  Box,
  Button,
  Divider,
  FlatList,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
} from 'native-base';
import React, {useState} from 'react';

const initialJobListings: JobListing[] = [
  {
    id: 1,
    title: 'Management Associate #FRESHGRADSWELCOME',
    featured: true,
    location: 'Braddell - NS18',
    company: 'FastJobs',
    postedDate: '17 Jun',
    salary: {
      pay: 4000,
      cycle: '/ month',
    },
    saved: true,
  },
  {
    id: 2,
    title: 'Management Trainee',
    featured: true,
    location: 'Multiple Locations',
    company: 'SUSHI-TEI PTE LTD',
    postedDate: '20 Jun',
    salary: {
      pay: 3300,
      cycle: '/ month',
    },
    saved: false,
  },
  {
    id: 3,
    title: 'Restaurant Management Trainee',
    featured: true,
    location: 'Multiple Locations',
    company: "Mc Donald's Singapore",
    postedDate: '25 May',
    salary: {
      pay: 2750,
      cycle: null,
    },
    saved: false,
  },
  {
    id: 4,
    title: 'Management Trainee X 20 (NO EXP NEEDED/GOOD CAREER PROGRESSION) ZX',
    featured: false,
    location: 'Multiple Locations',
    company: 'MCI CAREER SERVICES PTE LTD',
    postedDate: '19 Jun',
    salary: {
      pay: 2700,
      cycle: '/ month',
    },
    saved: false,
  },
  {
    id: 5,
    title: 'Management Associate #FRESHGRADSWELCOME',
    featured: true,
    location: 'Braddell - NS18',
    company: 'FastJobs',
    postedDate: '17 Jun',
    salary: {
      pay: 4000,
      cycle: '/ month',
    },
    saved: true,
  },
  {
    id: 6,
    title: 'Management Trainee',
    featured: true,
    location: 'Multiple Locations',
    company: 'SUSHI-TEI PTE LTD',
    postedDate: '20 Jun',
    salary: {
      pay: 3300,
      cycle: '/ month',
    },
    saved: false,
  },
  {
    id: 7,
    title: 'Restaurant Management Trainee',
    featured: true,
    location: 'Multiple Locations',
    company: "Mc Donald's Singapore",
    postedDate: '25 May',
    salary: {
      pay: 2750,
      cycle: null,
    },
    saved: false,
  },
  {
    id: 8,
    title: 'Management Trainee X 20 (NO EXP NEEDED/GOOD CAREER PROGRESSION) ZX',
    featured: false,
    location: 'Multiple Locations',
    company: 'MCI CAREER SERVICES PTE LTD',
    postedDate: '19 Jun',
    salary: {
      pay: 2700,
      cycle: '/ month',
    },
    saved: false,
  },
];

interface DiscoverScreenProps {}

const DiscoverScreen: React.FC<DiscoverScreenProps> = ({}) => {
  const [jobListings, setJobListings] =
    useState<JobListing[]>(initialJobListings);
  return (
    <FlatList
      data={jobListings}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <Stack bg={'white'} mb={2} px={4} pt={4}>
          <Stack space={2}>
            <Flex direction={'row'} justifyContent={'space-between'}>
              <Box flex={3}>
                <Text fontSize={'md'} fontWeight={'bold'}>
                  {item.title.toUpperCase()}
                </Text>
              </Box>
              {item.featured && (
                <Box flex={1} pl={4}>
                  <Badge colorScheme={'pink'} variant={'solid'}>
                    FEATURED
                  </Badge>
                </Box>
              )}
            </Flex>
            <Flex direction={'row'} alignItems={'center'}>
              <Icon as={Ionicons} name="location" />
              <Text pl={1} color={'gray.500'} fontSize={'xs'}>
                {item.location}
              </Text>
            </Flex>
            <Flex direction={'row'} alignItems={'center'}>
              <Image
                source={require('../assets/images/placeholder.png')}
                alt={item.company}
                width={16}
                height={10}
                rounded={'sm'}
              />
              <Stack flex={1} pl={3}>
                <Text>{item.company}</Text>
                <Text fontSize={'xs'}>{item.postedDate}</Text>
              </Stack>
              <Stack pr={2}>
                <Text color={'pink.500'} fontSize={'md'} fontWeight={'bold'}>
                  ${item.salary.pay}
                </Text>
                <Text>{item.salary.cycle}</Text>
              </Stack>
            </Flex>
            <Divider mt={2} />
          </Stack>
          <Flex direction={'row'} alignItems={'center'}>
            <Flex
              flex={1}
              direction={'row'}
              alignItems={'center'}
              justifyContent={'center'}>
              <Button
                onPress={() => {
                  setJobListings(
                    jobListings.map(cur => {
                      if (cur.id === item.id)
                        return {
                          ...cur,
                          saved: !cur.saved,
                        };
                      else return cur;
                    }),
                  );
                }}
                leftIcon={
                  item.saved ? (
                    <Icon as={Ionicons} name="star-outline" size={'md'} />
                  ) : (
                    <Icon
                      as={Ionicons}
                      name="star"
                      color={'pink.500'}
                      size={'md'}
                    />
                  )
                }
                variant={'unstyled'}>
                {item.saved ? (
                  <Text fontSize={'md'}>Save</Text>
                ) : (
                  <Text color={'pink.500'} fontSize={'md'}>
                    Saved
                  </Text>
                )}
              </Button>
            </Flex>
            <Flex
              flex={1}
              direction={'row'}
              alignItems={'center'}
              justifyContent={'center'}>
              <Button
                onPress={() => {}}
                leftIcon={
                  <Icon as={Ionicons} name="share-outline" size={'md'} />
                }
                variant={'unstyled'}>
                <Text fontSize={'md'}>Share</Text>
              </Button>
            </Flex>
          </Flex>
        </Stack>
      )}
    />
  );
};
export default DiscoverScreen;
