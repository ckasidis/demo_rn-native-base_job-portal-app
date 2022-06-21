/* eslint-disable */

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
} from 'native-base';
import React from 'react';

interface JobListingCardProps {
  jobListing: JobListing;
  onSave: () => void;
  onShare: () => void;
}

const JobListingCard: React.FC<JobListingCardProps> = ({
  jobListing,
  onSave,
  onShare,
}) => {
  return (
    <Stack bg={'white'} mb={2} px={4} pt={4}>
      <Stack space={2}>
        <Flex direction={'row'} justifyContent={'space-between'}>
          <Box flex={3}>
            <Text fontSize={'md'} fontWeight={'bold'}>
              {jobListing.title.toUpperCase()}
            </Text>
          </Box>
          {jobListing.featured && (
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
            {jobListing.location}
          </Text>
        </Flex>
        <Flex direction={'row'} alignItems={'center'}>
          <Image
            source={require('../assets/images/placeholder.png')}
            alt={jobListing.company}
            width={16}
            height={10}
            rounded={'sm'}
          />
          <Stack flex={1} pl={3}>
            <Text>{jobListing.company}</Text>
            <Text fontSize={'xs'}>Posted {jobListing.postedDate}</Text>
          </Stack>
          <Stack pr={2}>
            <Text color={'pink.500'} fontSize={'md'} fontWeight={'bold'}>
              ${jobListing.salary.pay}
            </Text>
            <Text>{jobListing.salary.cycle}</Text>
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
            onPress={onSave}
            leftIcon={
              jobListing.saved ? (
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
            {jobListing.saved ? (
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
            onPress={onShare}
            leftIcon={<Icon as={Ionicons} name="share-outline" size={'md'} />}
            variant={'unstyled'}>
            <Text fontSize={'md'}>Share</Text>
          </Button>
        </Flex>
      </Flex>
    </Stack>
  );
};
export default JobListingCard;
