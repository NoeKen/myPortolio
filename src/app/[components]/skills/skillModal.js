import React from 'react';
import { Box, Typography, Dialog, DialogTitle, DialogContent, LinearProgress } from '@mui/material';

const SkillModal = ({ open, handleClose, selectedCategory }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{selectedCategory?.category}</DialogTitle>
      <DialogContent>
        {selectedCategory?.skills.map((skill, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <Typography variant="body1" gutterBottom>{skill.name}</Typography>
              <LinearProgress variant="determinate" value={skill.proficiency} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="textSecondary">{`${skill.proficiency}%`}</Typography>
            </Box>
          </Box>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default SkillModal;
