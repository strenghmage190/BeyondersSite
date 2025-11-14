# Campaign Cover Image Implementation

- [x] Update `types.ts`: Add `cover_image_url: string | null;` to Campaign interface.
- [x] Update `api/campaigns.ts`: Add `uploadAndSetCampaignCover` function that uploads file to 'campaign-covers' bucket, gets public URL, and updates campaign.
- [x] Create `components/modals/CoverImageModal.tsx`: New component with file input, preview using URL.createObjectURL, save button calling upload function, and close on success.
- [x] Update `components/CampaignDashboardPage.tsx`: Add showCoverModal state, set button onClick to open modal, replace placeholder with img if cover_image_url exists, render CoverImageModal conditionally.
- [x] Update `styles/components/_modals.css`: Add CSS for image preview container, preview, cover container, and cover image.
