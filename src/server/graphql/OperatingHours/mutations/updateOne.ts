import { mutationField, nonNull } from 'nexus'

export const OperatingHoursUpdateOneMutation = mutationField(
  'updateOneOperatingHours',
  {
    type: nonNull('OperatingHours'),
    args: {
      where: nonNull('OperatingHoursWhereUniqueInput'),
      data: nonNull('OperatingHoursUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.operatingHours.update({
        where,
        data,
        ...select,
      })
    },
  },
)
