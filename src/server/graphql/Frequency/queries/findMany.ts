import { queryField, nonNull, list } from 'nexus'

export const FrequencyFindManyQuery = queryField('findManyFrequency', {
  type: nonNull(list(nonNull('Frequency'))),
  args: {
    where: 'FrequencyWhereInput',
    orderBy: list('FrequencyOrderByInput'),
    cursor: 'FrequencyWhereUniqueInput',
    distinct: 'FrequencyScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.frequency.findMany({
      ...args,
      ...select,
    })
  },
})
