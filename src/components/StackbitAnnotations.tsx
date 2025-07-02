import React from 'react';

interface StackbitAnnotationsProps {
  children: React.ReactNode;
  objectId?: string;
  fieldPath?: string;
  className?: string;
}

export const StackbitAnnotations: React.FC<StackbitAnnotationsProps> = ({
  children,
  objectId,
  fieldPath,
  className = ''
}) => {
  const props: Record<string, string> = {};
  
  if (objectId) {
    props['data-sb-object-id'] = objectId;
  }
  
  if (fieldPath) {
    props['data-sb-field-path'] = fieldPath;
  }

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default StackbitAnnotations;