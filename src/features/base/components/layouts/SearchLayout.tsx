import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { Input,Box } from '@chakra-ui/react';

function SearchLayout() {
  return (
    <Box display='flex' mt={3} bg={"black"} rounded={3}>
    <Box display={'flex'} flexDirection={'row'} boxSize={"20px"} width={"100%"} maxWidth={"100%"} borderColor={"none"}>
      <FontAwesomeIcon icon={faMagnifyingGlass} color='white' style={{fontSize:"25px", marginTop:"8"}} />
  <Input bg={"none"} placeholder="Search for posts"  borderColor={"none"}/>
    </Box>
  </Box>

  )
}

export default SearchLayout