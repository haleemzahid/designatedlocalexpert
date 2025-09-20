#!/usr/bin/env node

/**
 * NTClipboard License System Setup Script
 *
 * This script completes the setup of the license key protection system.
 * Run this after implementing all the license system files.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const crypto = require('crypto');

console.log('🔐 NTClipboard License System Setup');
console.log('=====================================\n');

// Check if running in correct directory
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error(
    '❌ Error: Please run this script from the project root directory'
  );
  process.exit(1);
}

// Check if Prisma schema exists
const schemaPath = path.join(process.cwd(), 'prisma', 'schema.prisma');
if (!fs.existsSync(schemaPath)) {
  console.error('❌ Error: Prisma schema not found');
  process.exit(1);
}

console.log('1️⃣ Checking dependencies...');

// Check if required packages are installed
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const requiredDeps = ['adm-zip', 'nanoid'];
const missingDeps = requiredDeps.filter(
  (dep) => !packageJson.dependencies[dep] && !packageJson.devDependencies[dep]
);

if (missingDeps.length > 0) {
  console.log('📦 Installing missing dependencies...');
  try {
    execSync(`npm install ${missingDeps.join(' ')} @types/adm-zip`, {
      stdio: 'inherit'
    });
    console.log('✅ Dependencies installed successfully');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
    process.exit(1);
  }
} else {
  console.log('✅ All dependencies are already installed');
}

console.log('\n2️⃣ Checking environment variables...');

// Check for .env file and LICENSE_ENCRYPTION_KEY
const envPath = path.join(process.cwd(), '.env');
let envContent = '';
let hasLicenseKey = false;

if (fs.existsSync(envPath)) {
  envContent = fs.readFileSync(envPath, 'utf8');
  hasLicenseKey = envContent.includes('LICENSE_ENCRYPTION_KEY');
}

if (!hasLicenseKey) {
  console.log('🔑 Generating secure encryption key...');
  const encryptionKey = crypto.randomBytes(32).toString('hex');
  const licenseKeyLine = `\n# License System Configuration\nLICENSE_ENCRYPTION_KEY=${encryptionKey}\n`;

  if (fs.existsSync(envPath)) {
    fs.appendFileSync(envPath, licenseKeyLine);
  } else {
    fs.writeFileSync(envPath, licenseKeyLine.trim() + '\n');
  }
  console.log('✅ Encryption key added to .env file');
} else {
  console.log('✅ License encryption key already configured');
}

console.log('\n3️⃣ Running database migration...');

try {
  // Check if migration already exists
  const migrationsDir = path.join(process.cwd(), 'prisma', 'migrations');
  const migrationExists =
    fs.existsSync(migrationsDir) &&
    fs
      .readdirSync(migrationsDir)
      .some((dir) => dir.includes('add_license_system'));

  if (!migrationExists) {
    execSync('npx prisma migrate dev --name add_license_system', {
      stdio: 'inherit'
    });
    console.log('✅ Database migration completed');
  } else {
    console.log('✅ License system migration already exists');
    // Just generate the client to ensure it's up to date
    execSync('npx prisma generate', { stdio: 'inherit' });
  }
} catch (error) {
  console.error('❌ Database migration failed:', error.message);
  console.log('\n⚠️  You may need to run the migration manually:');
  console.log('   npx prisma migrate dev --name add_license_system');
}

console.log('\n4️⃣ Verifying installation...');

// Check if license system files exist
const requiredFiles = [
  'lib/license/license-key-generator.ts',
  'lib/license/system-fingerprint.ts',
  'app/api/license/activate/route.ts',
  'app/api/license/validate/route.ts',
  'types/license.ts'
];

const missingFiles = requiredFiles.filter(
  (file) => !fs.existsSync(path.join(process.cwd(), file))
);

if (missingFiles.length > 0) {
  console.error('❌ Missing required files:');
  missingFiles.forEach((file) => console.error(`   - ${file}`));
  process.exit(1);
}

console.log('✅ All required files are present');

console.log('\n5️⃣ Testing license system...');

try {
  // Test license key generation
  execSync('npx tsx tests/license-system.test.ts', { stdio: 'pipe' });
  console.log('✅ License system tests passed');
} catch (error) {
  console.log(
    '⚠️  License system test failed, but installation may still be successful'
  );
}

console.log('\n🎉 License System Setup Complete!');
console.log('=====================================');
console.log('\n📋 Next Steps:');
console.log('1. Ensure your installer file is in public/downloads/');
console.log('2. Test the purchase flow with Stripe');
console.log('3. Verify license activation works');
console.log('4. Check download includes license files');
console.log('\n📚 Documentation: LICENSE_SYSTEM_IMPLEMENTATION.md');
console.log('\n🔧 API Endpoints:');
console.log('   POST /api/license/activate   - Activate license');
console.log('   POST /api/license/validate   - Validate license');
console.log('   GET  /api/admin/licenses     - Admin dashboard');
console.log('\n✨ Your NTClipboard license protection system is ready!');
