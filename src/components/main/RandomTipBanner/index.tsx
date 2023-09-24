import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

interface RandomTipBannerProps {
  tips: string[];
  delay: number;
}

const RandomTipBanner = ({ tips, delay }: RandomTipBannerProps) => {
  const [tip, setTip] = useState<string>();

  useEffect(() => {
    const shuffledTips = tips.sort(() => Math.random() - 0.5);

    let idx = 0;
    const showNextTip = () => {
      setTip(shuffledTips[idx++]);
      if (idx >= shuffledTips.length) idx = 0;
    };

    const tmBanner = setInterval(showNextTip, delay);
    showNextTip();

    return () => {
      clearInterval(tmBanner);
    };
  }, [delay, tips]);

  return (
    <Box>
      <Typography data-testid="tip" variant="caption">
        {tip}
      </Typography>
    </Box>
  );
};

export default RandomTipBanner;
