import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Category from "../../types/Category";

type CategoriesProps = {
    categories: Category[],
    selectedCategory: Category | null,
    onCategoryPress: React.Dispatch<React.SetStateAction<Category | null>>,
}

const Categories = ({ categories, selectedCategory, onCategoryPress }: CategoriesProps) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={item => String(item?.value)}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    const isSelected = selectedCategory === item;
                    const displayName = item.label;
                    return (
                        <TouchableOpacity onPress={() => onCategoryPress(item)} style={styles.itemContainer}>
                            <Text style={[styles.item, isSelected ? styles.selectedCategory : {}]}>{displayName}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default React.memo(Categories);
