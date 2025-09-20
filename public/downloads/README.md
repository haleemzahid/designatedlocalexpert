# Downloads Directory

This directory should contain the NTClipboard application files that customers will download after purchase.

## Required Files:
- `NTClipboard-Setup.exe` - The main installer for NTClipboard

## Security Notes:
- The download API endpoint (`/api/download`) validates purchase tokens before allowing downloads
- Each purchase has a limited number of downloads (default: 1)
- Download links can expire after a certain period (default: 7 days)
- The actual file serving is handled securely through the API, not direct file access

## File Management:
1. Place your NTClipboard installer file in this directory
2. Ensure the filename matches what's configured in `/app/api/download/route.ts`
3. Update the filename in the API if needed
4. Make sure the file has appropriate permissions

## Alternative Storage:
For production, consider using cloud storage (AWS S3, Azure Blob, etc.) instead of storing files in the public directory for better security and scalability.
