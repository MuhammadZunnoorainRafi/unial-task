import { z } from 'zod';

export const formSchema = z.object({
  heading: z.string().min(1, 'Enter heading'),
  cardOneTitle: z.string().min(1, 'Enter card one title'),
  cardOneDesc: z.string().min(1, 'Enter card one desc'),
  cardTwoTitle: z.string().min(1, 'Enter card two title'),
  cardTwoDesc: z.string().min(1, 'Enter card two desc'),
  cardThreeTitle: z.string().min(1, 'Enter card three title'),
  cardThreeDesc: z.string().min(1, 'Enter card three desc'),
  image: z.any().refine((val) => val?.length > 0, 'Select Image'),
  video: z.any().refine((val) => val?.length > 0, 'Select Video'),
  gigFile: z.any().refine((val) => val?.length > 0, 'Select File'),
});
