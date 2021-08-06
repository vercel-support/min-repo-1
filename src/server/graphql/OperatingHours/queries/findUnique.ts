import { queryField, nonNull } from 'nexus'

export const OperatingHoursFindUniqueQuery = queryField(
  'findUniqueOperatingHours',
  {
    type: 'OperatingHours',
    args: {
      where: nonNull('OperatingHoursWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.operatingHours.findUnique({
        where,
        ...select,
      })
    },
  },
)
