echo **************** cleaning gradlew ******************
cd android && ./gradlew clean
cd ..

echo **************** deleting node_modules ******************
sudo rm -rf node_modules 

echo **************** downloading node_modules ******************
yarn install

echo **************** cache clean ******************
npm cache clean -f

echo **************** react-native link ******************
react-native link

echo **************** react-native run-android ******************
sudo react-native run-android

echo **************** run server ******************
npm start 