import { queryField, nonNull } from 'nexus'

export const IndividualTypeFindUniqueQuery = queryField(
  'findUniqueIndividualType',
  {
    type: 'IndividualType',
    args: {
      where: nonNull('IndividualTypeWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.individualType.findUnique({
        where,
        ...select,
      })
    },
  },
)
