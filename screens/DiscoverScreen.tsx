/* eslint-disable */

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
import {FlatList} from 'native-base';
import React, {useState} from 'react';
import JobListingCard from '../components/JobListingCard';

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
        <JobListingCard
          jobListing={item}
          onSave={() => {
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
          onShare={() => {}}
        />
      )}
    />
  );
};
export default DiscoverScreen;
