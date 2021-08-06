import { queryField, nonNull } from 'nexus'

export const FrequencyFindUniqueQuery = queryField('findUniqueFrequency', {
  type: 'Frequency',
  args: {
    where: nonNull('FrequencyWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.frequency.findUnique({
      where,
      ...select,
    })
  },
})
