export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <p className="text-sm text-secondary text-center mt-2">
          Copyright © {new Date().getFullYear()} Popoola Stephen. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
