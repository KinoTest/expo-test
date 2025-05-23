import { useRouter } from 'expo-router';
import { Pressable, Button } from 'react-native';
import { Link } from 'expo-router';


export default function Home() {
  const router = useRouter()

  function goToPatients() {
    router.navigate('./patients')
  }

  return (
    <>
      <Link href="./patients/">
        
          <Button title='go to Patients by "Link"'/>
        
      </Link>

      <Pressable>
        <Button title='go to Patients by code' onPress={goToPatients}/>
      </Pressable>
      
    </>
  )

}
