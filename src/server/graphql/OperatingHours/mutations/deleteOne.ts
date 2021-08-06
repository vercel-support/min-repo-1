import { mutationField, nonNull } from 'nexus'

export const OperatingHoursDeleteOneMutation = mutationField(
  'deleteOneOperatingHours',
  {
    type: 'OperatingHours',
    args: {
      where: nonNull('OperatingHoursWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.operatingHours.delete({
        where,
        ...select,
      })
    },
  },
)
