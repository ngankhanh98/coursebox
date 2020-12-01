// import React from 'react'
// import { StyleSheet, ScrollView, Text, View } from 'react-native'
// import Background from '../../components/Background'
// import CourseThumnail from '../../components/CourseThumnail'
// import SearchBar from '../../components/SearchBar'

// function BrowseScreen(props) {
//     return (
//         <>
//             <SearchBar />
//             <ScrollView>
//                 <Background>
//                     <Text>Populars</Text>
//                     <CourseThumnail title="Title" teacher="Teacher" description="This is description" />
//                     <CourseThumnail title="Title" teacher="Teacher" description="This is description" />
//                     <CourseThumnail title="Title" teacher="Teacher" description="This is description" />
//                     <CourseThumnail title="Title" teacher="Teacher" description="This is description" />
//                 </Background>
//             </ScrollView>
//         </>
//     )
// }

// BrowseScreen.propTypes = {

// }

// const styles = StyleSheet.create({
//     searchBar: {
//         borderRadius: 50,

//     }
// })

// export default BrowseScreen

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CourseThumnail from '../../components/CourseThumnail';
import SearchBar from '../../components/SearchBar';
import { Text } from '@ui-kitten/components'

const data = [
    {
        title: 'Group 1',
        data: [
            {
                name: 'Default',
                slug: 'default',
            },
            {
                name: 'Example A',
                slug: 'example-a',
            },
            {
                name: 'Example B',
                slug: 'example-b',
            },
        ],
    },
    {
        title: 'Group 2',
        data: [
            {
                name: 'Example C',
                slug: 'example-c',
            },
            {
                name: 'Example D',
                slug: 'example-d',
            },
        ],
    },
];

export default function BrowserScreen() {
    return (<>

        <SearchBar />
        <ScrollView>
            <View style={styles.container}>
                <Text category="h6" style={{ marginBottom: 20 }}>Popular</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                </ScrollView>
            </View>
            <View style={styles.container}>
                <Text category="h6" style={{ marginBottom: 20 }}>Popular</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                </ScrollView>
            </View>
            <View style={styles.container}>
                <Text category="h6" style={{ marginBottom: 20 }}>Popular</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                    <CourseThumnail />
                </ScrollView>
            </View>
        </ScrollView>
    </>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
})
