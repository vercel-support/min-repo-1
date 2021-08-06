import { queryField, nonNull, list } from 'nexus'

export const CommunicationPreferencesFindManyQuery = queryField(
  'findManyCommunicationPreferences',
  {
    type: nonNull(list(nonNull('CommunicationPreferences'))),
    args: {
      where: 'CommunicationPreferencesWhereInput',
      orderBy: list('CommunicationPreferencesOrderByInput'),
      cursor: 'CommunicationPreferencesWhereUniqueInput',
      distinct: 'CommunicationPreferencesScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.communicationPreferences.findMany({
        ...args,
        ...select,
      })
    },
  },
)
