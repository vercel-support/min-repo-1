import { queryField, list } from 'nexus'

export const CommunicationPreferencesFindFirstQuery = queryField(
  'findFirstCommunicationPreferences',
  {
    type: 'CommunicationPreferences',
    args: {
      where: 'CommunicationPreferencesWhereInput',
      orderBy: list('CommunicationPreferencesOrderByInput'),
      cursor: 'CommunicationPreferencesWhereUniqueInput',
      distinct: 'CommunicationPreferencesScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.communicationPreferences.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
