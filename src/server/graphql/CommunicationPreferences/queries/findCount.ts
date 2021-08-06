import { queryField, nonNull, list } from 'nexus'

export const CommunicationPreferencesFindCountQuery = queryField(
  'findManyCommunicationPreferencesCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'CommunicationPreferencesWhereInput',
      orderBy: list('CommunicationPreferencesOrderByInput'),
      cursor: 'CommunicationPreferencesWhereUniqueInput',
      distinct: 'CommunicationPreferencesScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.communicationPreferences.count(args as any)
    },
  },
)
