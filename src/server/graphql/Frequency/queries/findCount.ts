import { queryField, nonNull, list } from 'nexus'

export const FrequencyFindCountQuery = queryField('findManyFrequencyCount', {
  type: nonNull('Int'),
  args: {
    where: 'FrequencyWhereInput',
    orderBy: list('FrequencyOrderByInput'),
    cursor: 'FrequencyWhereUniqueInput',
    distinct: 'FrequencyScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.frequency.count(args as any)
  },
})
