import firestore from '@react-native-firebase/firestore';
import { User } from '../types/User';

const usersCollection = firestore().collection('Users');

