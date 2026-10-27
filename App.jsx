import React from 'react';
import { View, Text, Alert } from 'react-native';
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';
import DialogeBox from './DialogComponents/DialogeBox';
import ItemDelete from './DialogComponents/ItemDelete';
import LoginForm from './DialogComponents/LoginForm';
import ProductDisplay from './DialogComponents/ProductDisplay';
// import Registration from './DialogComponents/Registration';
import AlertExample from './AlertComponents/AlertExample';
import RegistrationForm from './AlertComponents/RegistrationForm'
import ExitConfermation from './AlertComponents/ExitConfermation'
import TaskManagment from './AlertComponents/TaskManagment'
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          {/* <DialogeBox /> */}
          {/* <ItemDelete /> */}
          {/* <LoginForm /> */}
          {/* <ProductDisplay /> */}
          {/* <Registration /> */}

          {/* <AlertExample /> */}
          {/* <RegistrationForm /> */}
          {/* <ExitConfermation /> */}
          <TaskManagment />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   StatusBar,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';

// const App = () => {
//   const [step, setStep] = useState(1);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [otp, setOtp] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [completed, setCompleted] = useState(false);

//   const nextStep = () => {
//     setError('');

//     if (step === 1 && !name.trim()) {
//       setError('Please enter your full name.');
//       return;
//     }

//     if (step === 2) {
//       if (!email.trim() || !phone.trim()) {
//         setError('Please enter your email and phone number.');
//         return;
//       }

//       if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
//         setError('Please enter a valid email.');
//         return;
//       }
//     }

//     if (step === 3 && otp.trim().length !== 6) {
//       setError('Enter a 6-digit OTP.');
//       return;
//     }

//     if (step === 4) {
//       if (password.length < 8) {
//         setError('Password must contain at least 8 characters.');
//         return;
//       }

//       if (password !== confirmPassword) {
//         setError('Passwords do not match.');
//         return;
//       }

//       setCompleted(true);
//       return;
//     }

//     setStep(step + 1);
//   };

//   const previousStep = () => {
//     setError('');
//     setStep(step - 1);
//   };

//   const renderProgress = () => (
//     <View style={styles.progressRow}>
//       {[1, 2, 3, 4].map((item) => (
//         <React.Fragment key={item}>
//           <View
//             style={[
//               styles.progressCircle,
//               item <= step && styles.activeCircle,
//             ]}
//           >
//             <Text
//               style={[
//                 styles.progressNumber,
//                 item <= step && styles.activeNumber,
//               ]}
//             >
//               {item < step ? '✓' : item}
//             </Text>
//           </View>

//           {item < 4 && (
//             <View
//               style={[
//                 styles.progressLine,
//                 item < step && styles.activeLine,
//               ]}
//             />
//           )}
//         </React.Fragment>
//       ))}
//     </View>
//   );

//   const renderField = (
//     label,
//     placeholder,
//     value,
//     onChangeText,
//     keyboardType = 'default'
//   ) => (
//     <View style={styles.fieldContainer}>
//       <Text style={styles.label}>{label}</Text>
//       <TextInput
//         style={styles.input}
//         placeholder={placeholder}
//         placeholderTextColor="#999999"
//         value={value}
//         onChangeText={onChangeText}
//         keyboardType={keyboardType}
//         autoCapitalize={keyboardType === 'email-address' ? 'none' : 'sentences'}
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#E6FBE8" barStyle="dark-content" />

//       <KeyboardAvoidingView
//         style={styles.flex}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       >
//         {completed ? (
//           <View style={styles.successScreen}>
//             <Text style={styles.successIcon}>✓</Text>
//             <Text style={styles.successTitle}>Registration Complete!</Text>
//             <Text style={styles.successMessage}>
//               Thank you, {name}. Your registration form has been completed.
//             </Text>

//             <TouchableOpacity
//               style={styles.primaryButton}
//               onPress={() => {
//                 setStep(1);
//                 setName('');
//                 setEmail('');
//                 setPhone('');
//                 setOtp('');
//                 setPassword('');
//                 setConfirmPassword('');
//                 setError('');
//                 setCompleted(false);
//               }}
//             >
//               <Text style={styles.buttonText}>Start Again</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <>
//             {/* Illustration section */}
//             <View
//               style={[
//                 styles.hero,
//                 step === 1 && styles.heroGreen,
//                 step === 2 && styles.heroPeach,
//                 step === 3 && styles.heroBlue,
//                 step === 4 && styles.heroPink,
//               ]}
//             >
//               <View style={styles.header}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     if (step > 1) previousStep();
//                   }}
//                   style={styles.backArrow}
//                 >
//                   <Text style={styles.arrowText}>
//                     {step > 1 ? '‹' : ''}
//                   </Text>
//                 </TouchableOpacity>

//                 <Text style={styles.headerTitle}>Register</Text>
//                 <View style={styles.headerSpacer} />
//               </View>

//               <View style={styles.illustration}>
//                 <Text style={styles.illustrationEmoji}>
//                   {step === 1 && '🧑🏻‍🎓'}
//                   {step === 2 && '💻'}
//                   {step === 3 && '📱'}
//                   {step === 4 && '👫'}
//                 </Text>

//                 <Text style={styles.illustrationCaption}>
//                   {step === 1 && 'Welcome aboard!'}
//                   {step === 2 && 'Your contact details'}
//                   {step === 3 && 'Verify your account'}
//                   {step === 4 && 'Almost there!'}
//                 </Text>
//               </View>
//             </View>

//             {/* Form section */}
//             <ScrollView
//               style={styles.formSection}
//               contentContainerStyle={styles.formContent}
//               keyboardShouldPersistTaps="handled"
//             >
//               {renderProgress()}

//               <Text style={styles.stepHeading}>
//                 {step === 1 && 'Personal Information'}
//                 {step === 2 && 'Contact Information'}
//                 {step === 3 && 'OTP Verification'}
//                 {step === 4 && 'Create Password'}
//               </Text>

//               {step === 1 && (
//                 <>
//                   {renderField(
//                     'Full Name',
//                     'Enter your full name',
//                     name,
//                     setName
//                   )}
//                 </>
//               )}

//               {step === 2 && (
//                 <>
//                   {renderField(
//                     'Email',
//                     'yourname@mail.com',
//                     email,
//                     setEmail,
//                     'email-address'
//                   )}

//                   {renderField(
//                     'Phone Number',
//                     'Enter your phone number',
//                     phone,
//                     setPhone,
//                     'phone-pad'
//                   )}
//                 </>
//               )}

//               {step === 3 && (
//                 <>
//                   {renderField(
//                     'OTP',
//                     'Enter the 6-digit code',
//                     otp,
//                     (value) => setOtp(value.replace(/\D/g, '').slice(0, 6)),
//                     'number-pad'
//                   )}

//                   <Text style={styles.helperText}>
//                     For this practice project, enter any six digits.
//                   </Text>
//                 </>
//               )}

//               {step === 4 && (
//                 <>
//                   <Text style={styles.label}>Password</Text>
//                   <View style={styles.passwordContainer}>
//                     <TextInput
//                       style={styles.passwordInput}
//                       placeholder="Create password"
//                       placeholderTextColor="#999999"
//                       value={password}
//                       onChangeText={setPassword}
//                       secureTextEntry={!showPassword}
//                     />
//                     <TouchableOpacity
//                       onPress={() => setShowPassword(!showPassword)}
//                     >
//                       <Text style={styles.showPassword}>
//                         {showPassword ? 'Hide' : 'Show'}
//                       </Text>
//                     </TouchableOpacity>
//                   </View>

//                   <Text style={styles.helperText}>
//                     At least 8 characters long
//                   </Text>

//                   <Text style={[styles.label, styles.confirmLabel]}>
//                     Confirm Password
//                   </Text>
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Confirm password"
//                     placeholderTextColor="#999999"
//                     value={confirmPassword}
//                     onChangeText={setConfirmPassword}
//                     secureTextEntry={!showPassword}
//                   />

//                   <Text style={styles.helperText}>
//                     Passwords must match.
//                   </Text>
//                 </>
//               )}

//               {!!error && <Text style={styles.errorText}>{error}</Text>}

//               <View style={styles.buttons}>
//                 {step > 1 && (
//                   <TouchableOpacity
//                     style={styles.secondaryButton}
//                     onPress={previousStep}
//                   >
//                     <Text style={styles.secondaryButtonText}>Back</Text>
//                   </TouchableOpacity>
//                 )}

//                 <TouchableOpacity
//                   style={[
//                     styles.primaryButton,
//                     step === 1 && styles.fullButton,
//                   ]}
//                   onPress={nextStep}
//                 >
//                   <Text style={styles.buttonText}>
//                     {step === 4 ? 'Confirm' : 'Next'}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </ScrollView>
//           </>
//         )}
//       </KeyboardAvoidingView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   flex: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   hero: {
//     height: '47%',
//     minHeight: 280,
//     maxHeight: 390,
//   },
//   heroGreen: {
//     backgroundColor: '#E9FCE8',
//   },
//   heroPeach: {
//     backgroundColor: '#FFF1E7',
//   },
//   heroBlue: {
//     backgroundColor: '#E8F4FF',
//   },
//   heroPink: {
//     backgroundColor: '#FCEBFA',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 22,
//     paddingTop: 18,
//   },
//   backArrow: {
//     width: 35,
//   },
//   arrowText: {
//     fontSize: 38,
//     color: '#777777',
//     lineHeight: 40,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#333333',
//   },
//   headerSpacer: {
//     width: 35,
//   },
//   illustration: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom: 10,
//   },
//   illustrationEmoji: {
//     fontSize: 100,
//   },
//   illustrationCaption: {
//     fontSize: 15,
//     color: '#68716D',
//     marginTop: 8,
//   },
//   formSection: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   formContent: {
//     paddingHorizontal: 24,
//     paddingTop: 22,
//     paddingBottom: 30,
//     flexGrow: 1,
//   },
//   progressRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 26,
//   },
//   progressCircle: {
//     width: 20,
//     height: 20,
//     borderWidth: 1.5,
//     borderColor: '#D5D5D5',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   activeCircle: {
//     backgroundColor: '#19AA91',
//     borderColor: '#19AA91',
//   },
//   progressNumber: {
//     color: '#999999',
//     fontSize: 10,
//     fontWeight: '600',
//   },
//   activeNumber: {
//     color: '#FFFFFF',
//   },
//   progressLine: {
//     height: 3,
//     flex: 1,
//     backgroundColor: '#DDDDDD',
//   },
//   activeLine: {
//     backgroundColor: '#19AA91',
//   },
//   stepHeading: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#333333',
//     marginBottom: 20,
//   },
//   fieldContainer: {
//     marginBottom: 18,
//   },
//   label: {
//     fontSize: 13,
//     color: '#666666',
//     marginBottom: 8,
//     fontWeight: '500',
//   },
//   input: {
//     height: 44,
//     borderWidth: 1,
//     borderColor: '#D8D8D8',
//     borderRadius: 5,
//     paddingHorizontal: 12,
//     fontSize: 14,
//     color: '#222222',
//   },
//   passwordContainer: {
//     height: 44,
//     borderWidth: 1,
//     borderColor: '#D8D8D8',
//     borderRadius: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 12,
//   },
//   passwordInput: {
//     flex: 1,
//     height: 44,
//     fontSize: 14,
//     color: '#222222',
//   },
//   showPassword: {
//     color: '#19AA91',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   helperText: {
//     fontSize: 12,
//     color: '#888888',
//     marginTop: 7,
//   },
//   confirmLabel: {
//     marginTop: 18,
//   },
//   errorText: {
//     color: '#D93025',
//     fontSize: 13,
//     marginTop: 12,
//   },
//   buttons: {
//     flexDirection: 'row',
//     gap: 10,
//     marginTop: 'auto',
//     paddingTop: 30,
//   },
//   primaryButton: {
//     flex: 1,
//     minHeight: 44,
//     backgroundColor: '#19AA91',
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 15,
//   },
//   fullButton: {
//     flex: 1,
//   },
//   secondaryButton: {
//     flex: 1,
//     minHeight: 44,
//     borderWidth: 1,
//     borderColor: '#19AA91',
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 15,
//   },
//   secondaryButtonText: {
//     color: '#19AA91',
//     fontWeight: '600',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   successScreen: {
//     flex: 1,
//     backgroundColor: '#E9FCE8',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 28,
//   },
//   successIcon: {
//     fontSize: 65,
//     color: '#19AA91',
//     fontWeight: 'bold',
//   },
//   successTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#263A35',
//     marginTop: 20,
//   },
//   successMessage: {
//     fontSize: 15,
//     textAlign: 'center',
//     color: '#68716D',
//     marginVertical: 20,
//     lineHeight: 23,
//   },
// });

// export default App;
