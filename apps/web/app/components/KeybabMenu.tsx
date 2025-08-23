'use client';
import { KeybabMenu } from "@sume/ui/components/KeybabMenu";
import React from 'react';
import { 
  Pencil1Icon, 
  TrashIcon, 
  CopyIcon, 
  Share1Icon,
  ArchiveIcon,
  DownloadIcon
} from '@radix-ui/react-icons';

const KeybabMenuExamples = () => {
  return (
    <div className="p-6 flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <h3 className="text-lg font-medium">Basic Examples</h3>
        {/* Default vertical menu */}
        <KeybabMenu
          action={[
            { label: "Edit", onClick: () => alert("Edit clicked") },
            { label: "Copy", onClick: () => alert("Copied to clipboard") },
            { 
              label: "Delete", 
              onClick: () => alert("Delete clicked"), 
              destructive: true 
            },
          ]}
        />
        
        {/* Horizontal variant */}
        <KeybabMenu
          variant="horizontal"
          action={[
            { label: "Edit", onClick: () => alert("Edit clicked") },
            { label: "Share", onClick: () => alert("Sharing...") },
          ]}
        />
      </div>

      <div className="flex items-center gap-4">
        <h3 className="text-lg font-medium">Advanced Examples</h3>
        {/* With icons and disabled state */}
        <KeybabMenu
          action={[
            { 
              label: "Edit", 
              onClick: () => alert("Edit clicked"), 
              icon: <Pencil1Icon className="w-4 h-4" />
            },
            { 
              label: "Duplicate", 
              onClick: () => alert("Item duplicated"), 
              icon: <CopyIcon className="w-4 h-4" />
            },
            { 
              label: "Archive", 
              onClick: () => alert("Archived"), 
              disabled: true,
              icon: <ArchiveIcon className="w-4 h-4" />
            },
            { 
              label: "Delete", 
              onClick: () => alert("Delete clicked"), 
              icon: <TrashIcon className="w-4 h-4" />,
              destructive: true 
            },
          ]}
        />
        
        {/* With custom width */}
        <KeybabMenu
          menuWidth="fit"
          action={[
            { label: "Short", onClick: () => {} },
            { label: "Medium text", onClick: () => {} },
            { label: "Very long menu item text", onClick: () => {} },
          ]}
        />
      </div>

      <div className="flex items-center gap-4">
        <h3 className="text-lg font-medium">Custom Content</h3>
        {/* Custom variant with complex content */}
        <KeybabMenu 
          variant="custom" 
          menuClassName="p-4"
          align="left"
          menuWidth="full"
        >
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 dark:text-white">Document Actions</h4>
            <button 
              className="flex items-center w-full gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              onClick={() => alert("Downloading...")}
            >
              <DownloadIcon />
              <span>Download PDF</span>
            </button>
            <button 
              className="flex items-center w-full gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              onClick={() => alert("Sharing document...")}
            >
              <Share1Icon />
              <span>Share with team</span>
            </button>
            <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Last modified: Today
              </p>
            </div>
          </div>
        </KeybabMenu>
      </div>
    </div>
  )
}

export default KeybabMenuExamples;