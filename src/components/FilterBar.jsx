import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Stack, Chip } from '@mui/material'; 
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
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ my: 3, display: 'flex', justifyContent: 'center', overflowX: 'auto', pb: 1 }}>
            
          <Stack direction="row" spacing={1}>
            {categories.map((cat) => (
              <Chip
                key={cat.id} 
                label={cat.name} 
                onClick={() => setSelectedCategory(cat.id)} 
                color={selectedCategory === cat.id ? 'secondary' : 'default'}
                variant={selectedCategory === cat.id ? 'filled' : 'outlined'}
                clickable
              />
            ))}
          </Stack>
        </Box>
    );
}