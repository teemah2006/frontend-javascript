// Brand types for unique identification
type MajorBrand = { readonly __brand: 'MajorCredits' };
type MinorBrand = { readonly __brand: 'MinorCredits' };

// Interfaces with credits and brand
interface MajorCredits {
  credits: number;
  brand: MajorBrand;
}

interface MinorCredits {
  credits: number;
  brand: MinorBrand;
}

// Functions to sum credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: { __brand: 'MajorCredits' }
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: { __brand: 'MinorCredits' }
  };
}