import { FormattedMessage } from 'react-intl';

export const FilterWarning: React.FC<{
  title: string;
  expanded?: boolean;
  onClick?: () => void;
}> = ({ title, expanded, onClick }) => (
  <div className='content-warning content-warning--filter'>
    <div className='content-warning__border' />

    <div className='content-warning__body'>
      <p>
        <FormattedMessage
          id='filter_warning.matches_filter'
          defaultMessage='Matches filter “{title}”'
          values={{ title }}
        />
      </p>

      <button className='link-button' onClick={onClick}>
        {expanded ? (
          <FormattedMessage
            id='content_warning.hide'
            defaultMessage='Hide post'
          />
        ) : (
          <FormattedMessage
            id='content_warning.show'
            defaultMessage='Show anyway'
          />
        )}
      </button>
    </div>

    <div className='content-warning__border' />
  </div>
);
