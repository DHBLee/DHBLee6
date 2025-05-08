export const processFormatting = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const codeRegex = /`([^`]+)`/g;

    let safeText = text
    .replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(codeRegex, '<code class="MarkdownText text-Slate700">$1</code>')
    .replace(linkRegex, '<a href="$2" class="underline">$1</a>');
    
    return safeText;
}

export const parseCodeBlocks = (content) => {
    return content.split(/```([\s\S]*?)```/g);
};

export const parseHeadings = (line, index) => {
    const headingMatch = line.match(/^(#+)\s(.*)/);
    if (!headingMatch) return null;
    
    const level = Math.min(headingMatch[1].length, 6);
    const Tag = `h${level}`;
    return (
      <Tag key={index} className={`Heading${level}`} 
        dangerouslySetInnerHTML={{ __html: processFormatting(headingMatch[2]) }} 
      />
    );
};

export const parseBlockquotes = (line, index) => {
    if (!line.startsWith('> ')) return null;
    
    const content = line.substring(2).trim();
    return (
      <div key={`blockquote-${index}`} className="bg-Slate200 p-6 rounded-md border-l-4 border-Red">
        <p className="PreviewBold" 
          dangerouslySetInnerHTML={{ __html: processFormatting(content) }} 
        />
      </div>
    );
};

export const parseLists = {
    ordered: (line, index) => {
      const match = line.match(/^(\d+)\.\s(.*)/);
      if (!match) return null;
      return (
        <li key={index} className="Preview"
          dangerouslySetInnerHTML={{ __html: processFormatting(match[2]) }}
        />
      );
    },
    unordered: (line, index) => {
      const match = line.match(/^([-*+])\s(.*)/);
      if (!match) return null;
      return (
        <li key={index} className="Preview"
          dangerouslySetInnerHTML={{ __html: processFormatting(match[2]) }}
        />
      );
    }
  };