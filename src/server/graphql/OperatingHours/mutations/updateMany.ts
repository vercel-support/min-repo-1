import { mutationField, nonNull } from 'nexus'

export const OperatingHoursUpdateManyMutation = mutationField(
  'updateManyOperatingHours',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OperatingHoursWhereInput',
      data: nonNull('OperatingHoursUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.operatingHours.updateMany(args as any)
    },
  },
)
