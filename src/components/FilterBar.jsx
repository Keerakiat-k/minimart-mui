import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, FormControl, InputLabel, Select, MenuItem } from '@mui/material'; 
import { getAllCategories } from '../services/api';

export default function FilterBar({ selectedCategory, setSelectedCategory }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApiCategories = async () => {
            try {
                const data = await getAllCategories();
                const allCategory = { id: 'all', name: 'ทั้งหมด' };
                setCategories([allCategory, ...data]);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching categories:", error);
                setLoading(false);
            }
        };
        fetchApiCategories();
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                <CircularProgress />
            </Box>
        );
    }


    const handleChange = (event) => {
        setSelectedCategory(event.target.value); 
    };

    return (
        <Box>
            
            
            <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="category-select-label">หมวดหมู่สินค้า</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                    value={selectedCategory} 
                    label="หมวดหมู่สินค้า" 
                    onChange={handleChange} 
                    color="secondary" 
                >
                    
                   
                    {categories.map((cat) => (
                        <MenuItem key={cat.id} value={cat.id}>
                            {cat.name}
                        </MenuItem>
                    ))}
                    
                </Select>
            </FormControl>

        </Box>
    );
}