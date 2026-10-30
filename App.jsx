
import { FlatList, ScrollView, View } from 'react-native';
import Getapi from './Components/Getapi'
import PostApiMethod from './Components/PostApiMethod';
import PutApiMethod from './Components/PutApiMethod'
import PatchApiMethod from './Components/PatchApiMethod';
import DeleteApiMethod from './Components/DeleteApiMethod';
import ExpenseTrakerApp from './MiniProjects/ExpenseTrackerApp'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FlatlistApiMethod from './Components/FlatlistApidata'
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>

          <View>
            {/* <PostApiMethod />
                <PatchApiMethod />
                <DeleteApiMethod />
                <PutApiMethod />
                <Getapi /> */}
<FlatlistApiMethod />
            {/* <ExpenseTrakerApp /> */}
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
