<template>
  <div>
    <Navigationbar />
    <UserCard />
    <DogCard />
  </div>
</template>

<script>
import Navigationbar from "../components/Navigationbar";
import DogCard from "../components/DogCard";
import UserCard from "../components/UserCard";

export default {
  components: {
    Navigationbar,
    UserCard,
    DogCard
  }
};
</script>
