import React, { useState } from 'react';
import { Box, Input, Button, Typography, Grid } from '@mui/joy';

const AddStudents: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    dateOfBirth: '',
    address: '',
    contacts: '',
    class: '',
    section: '',
    roll: '',
    parents: '',
    transport: '',
    hostel: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: '1500',
        margin: 'auto',
        padding: 2,
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography level="h4" textAlign="center" sx={{ mb: 2 }}>
        Student Registration Form
      </Typography>

      <Grid container spacing={2}>
        {/* Row 1 */}
        <Grid item xs={6}>
          <Input
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            fullWidth
            sx={{ height: '50px' }}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            fullWidth
            sx={{ height: '50px' }}
          />
        </Grid>

        {/* Row 2 */}
        <Grid item xs={6}>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            sx={{ height: '50px' }}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            placeholder="Date of Birth"
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            fullWidth
            sx={{ height: '50px' }}
          />
        </Grid>

        {/* Row 3 */}
        <Grid item xs={6}>
          <Input
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            fullWidth
            sx={{ height: '50px' }}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            placeholder="Contacts"
            name="contacts"
            value={formData.contacts}
            onChange={handleChange}
            required
            fullWidth
            sx={{ height: '50px' }}
          />
        </Grid>

        {/* Row 4 */}
        <Grid item xs={6}>
          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            required
            style={{ height: '50px', width: '100%', borderRadius: '4px', padding: '0 10px' }}
          >
            <option value="" disabled>Select Class</option>
            <option value="Form I">Form I</option>
            <option value="Form II">Form II</option>
            <option value="Form III">Form III</option>
            <option value="Form IV">Form IV</option>
          </select>
        </Grid>
        <Grid item xs={6}>
          <select
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
            style={{ height: '50px', width: '100%', borderRadius: '4px', padding: '0 10px' }}
          >
            <option value="" disabled>Select Section</option>
            <option value="Section A">Section A</option>
            <option value="Section B">Section B</option>
            <option value="Section C">Section C</option>
            <option value="Section D">Section D</option>
          </select>
        </Grid>

        {/* Row 5 */}
        <Grid item xs={6}>
          <Input
            placeholder="Roll"
            name="roll"
            value={formData.roll}
            onChange={handleChange}
            required
            fullWidth
            sx={{ height: '50px' }}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            placeholder="Parents"
            name="parents"
            value={formData.parents}
            onChange={handleChange}
            required
            fullWidth
            sx={{ height: '50px' }}
          />
        </Grid>

        {/* Row 6 */}
        <Grid item xs={6}>
          <Input
            placeholder="Transport"
            name="transport"
            value={formData.transport}
            onChange={handleChange}
            required
            fullWidth
            sx={{ height: '50px' }}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            placeholder="Hostel"
            name="hostel"
            value={formData.hostel}
            onChange={handleChange}
            required
            fullWidth
            sx={{ height: '50px' }}
          />
        </Grid>

        {/* Row 7 - Add Student Button */}
        <Grid item xs={12}>
          <Button 
            type="submit"
            variant="contained" 
            sx={{ 
              width: '100%', 
              height: '50px',
              backgroundColor: 'skyblue',  // Set success color
              '&:hover': {
                backgroundColor: 'light',  // Darker shade on hover
              },
            }}
          >
            Add Student
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddStudents;
