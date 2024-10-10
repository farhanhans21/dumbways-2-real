
import { Box, Flex } from '@chakra-ui/react'
import ProfileInfo from '../page/profile/ProfileInfoThreads'
import ProfilePost from '../page/profile/ProfileItem'

function ProfileLayout() {
  return (
    <Flex direction={'column'} justify={'center'} align={'center'} width={"auto"} maxWidth={"100%"} mt={3}>
      <ProfileInfo/>
      <Box mt={2} w="49vw" bg="black" borderBottom="1px solid grey">
      <ProfilePost/>
      </Box>
    </Flex>
  )
}

export default ProfileLayout