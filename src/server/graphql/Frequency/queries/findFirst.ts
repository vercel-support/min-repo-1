import { queryField, list } from 'nexus'

export const FrequencyFindFirstQuery = queryField('findFirstFrequency', {
  type: 'Frequency',
  args: {
    where: 'FrequencyWhereInput',
    orderBy: list('FrequencyOrderByInput'),
    cursor: 'FrequencyWhereUniqueInput',
    distinct: 'FrequencyScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.frequency.findFirst({
      ...args,
      ...select,
    })
  },
})
