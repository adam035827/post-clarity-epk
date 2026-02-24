#!/usr/bin/env pwsh
<#
.SYNOPSIS
Extracts the first frame from MP4 videos and converts them to JPG poster images.

.DESCRIPTION
This script uses ffmpeg to extract a thumbnail from each video file.
Requires ffmpeg to be installed and available in PATH.

.PARAMETER SourceDir
Directory containing the MP4 videos (default: current directory)

.PARAMETER OutputDir
Directory to save the JPG poster images (default: ./posters)

.PARAMETER FrameTime
Time (in seconds) to extract the frame from (default: 1 second)

.EXAMPLE
.\extract-video-thumbnails.ps1 -SourceDir "C:\Videos" -OutputDir "C:\Posters"
#>

param(
    [string]$SourceDir = ".",
    [string]$OutputDir = "./posters",
    [int]$FrameTime = 1,
    [int]$Width = 320
)

# Check if ffmpeg is installed
$ffmpeg = Get-Command ffmpeg -ErrorAction SilentlyContinue
if (-not $ffmpeg) {
    Write-Error "ffmpeg is not installed or not in PATH. Please install ffmpeg first."
    Write-Host "Download from: https://ffmpeg.org/download.html"
    exit 1
}

# Create output directory if it doesn't exist
if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
    Write-Host "Created output directory: $OutputDir"
}

# Get all MP4 files
$videos = Get-ChildItem -Path $SourceDir -Filter "*.mp4" -ErrorAction SilentlyContinue

if ($videos.Count -eq 0) {
    Write-Warning "No MP4 files found in $SourceDir"
    exit 1
}

Write-Host "Found $($videos.Count) video(s). Extracting thumbnails..."
Write-Host ""

$counter = 1
foreach ($video in $videos) {
    $outputFile = Join-Path $OutputDir "$($video.BaseName).jpg"
    $videoPath = $video.FullName
    
    Write-Host "[$counter/$($videos.Count)] Extracting: $($video.Name)"
    
    # Extract frame at specified time - let ffmpeg maintain aspect ratio
    & ffmpeg -i $videoPath -ss $FrameTime -vframes 1 -vf "scale=$Width`:-1" -q:v 2 -update 1 -y $outputFile 2>&1 | Out-Null
    
    if ($LASTEXITCODE -eq 0) {
        $fileSize = (Get-Item $outputFile).Length / 1KB
        Write-Host "  OK Saved to: $($video.BaseName).jpg ($([math]::Round($fileSize, 1)) KB)"
    } else {
        Write-Host "  FAILED to extract thumbnail for $($video.Name)"
    }
    
    $counter++
}

Write-Host ""
Write-Host "Done! Thumbnails saved to: $OutputDir"
Write-Host "Upload these JPG files to: src/assets/images/video-thumbnails/"
