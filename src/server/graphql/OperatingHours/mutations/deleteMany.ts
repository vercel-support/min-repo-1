import { mutationField, nonNull } from 'nexus'

export const OperatingHoursDeleteManyMutation = mutationField(
  'deleteManyOperatingHours',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OperatingHoursWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.operatingHours.deleteMany({ where } as any)
    },
  },
)
